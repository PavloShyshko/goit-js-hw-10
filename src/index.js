import './css/styles.css';
import {fetchCountries} from './fetchCountries';
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { makeMarkupList, makeMarkupItem } from './markupCreation';

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const searchInput = document.getElementById('search-box');

const DEBOUNCE_DELAY = 300;

searchInput.addEventListener('input', debounce(findCountry, DEBOUNCE_DELAY));

function findCountry(e){
    const inputValue = e.target.value.trim() 
    if(!inputValue){
        cleanSpace()
        return
    } 
    
    fetchCountries(inputValue).then(value =>{
        console.log(value)
         
        if(!value.length) throw new Error('Oops, there is no country with that name')
        filterCountry(value)
    }).catch(onError)
}

function filterCountry(obj){
    const n = obj.length
    if(n > 10){
        cleanSpace()
        Notify.info('Too many matches found. Please enter a more specific name')
    } else if(n === 1){
        cleanSpace()
       const countryCard =  makeMarkupItem(obj)
        countryInfo.innerHTML = countryCard
    } else if(n < 10 && n > 1){
        cleanSpace()
     const countryList = makeMarkupList(obj)     
    countryList.innerHTML = countryList
    }
}

function cleanSpace(){
   countryInfo.innerHTML = ''
countryList.innerHTML = ''
}


function onError(){
    cleanSpace()
    Notify.failure('Oops, there is no country with that name')
}
function makeMarkupList(fl){
   return fl.map(({flags, name})=> `<li class="country-item">
   <img
   src="${flags.svg}"
     alt="country flag"
     class="country-flag"
   />
   <p class="country-name">${name}</p>
 </li>`).join('')
}

function makeMarkupItem(elem){
   return elem.map(({name,capital,languages,flags,population})=> `<div class="main-info">
   <img
     src=${flags.svg}
     alt="country flag"
     class="country-flag"
   />
   <h1 class="country-name">${name}</h1>
 </div>
 <p class="country-desk"><strong>Capital: </strong>${capital}</p>
 <p class="country-desk"><strong>Population: </strong>${population}</p>
 <p class="country-desk"><strong>Languages: </strong>${languages.map(lang => lang.name ).join(', ')}</p>`)
}

export { makeMarkupList, makeMarkupItem };

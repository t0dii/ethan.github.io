Fancybox.bind( "[data-fancybox]" );

document.querySelector('h1').addEventListener('click', showMessage); 

$( 'button' ).click( filterItems ); 

function filterItems() { 
    let button = this; 
    let selector = $( button ).data( 'filter' );
    console.log( selector ); 
    $( '#products img' ).not( selector ).hide( 500 );
    $( selector ).show( 500 ); 

} 


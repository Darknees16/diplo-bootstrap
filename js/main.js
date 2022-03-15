$(document).ready(function() {
    $('#myTable').DataTable( {
        "scrollY":        "500px",
        "scrollCollapse": true,
        "paging":         false,
        
        language: {
            url:'https://cdn.datatables.net/plug-ins/1.11.5/i18n/es-MX.json'
        },

        dom: 'Bfrti',
        buttons: [
    
            'copy', 'excel', 'pdf','searchPanes',
        ]
     
    } );
} );


 
     
    




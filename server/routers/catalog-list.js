let route = {
    
    route: 'catalog.list',
    get:(pathSet)=>{
        console.log('catalog.list');
        return [
          { 
            path: ['petList', 0, 'name'], 
            value: 'Pets I have now'
          },
          { 
            path: ['petList', 1, 'name'], 
            value: 'Pets I once had'
          },
          { 
            path: ['petList', 2, 'name'], 
            value: 'Pets my friends have'
          }
        ];
    }
}

export default route;
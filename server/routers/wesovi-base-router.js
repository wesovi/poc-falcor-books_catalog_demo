import FalcorRouter from 'falcor-router';

import * as CatalogList from './catalog-list';
import * as CatalogById from './catalog-byId';

const WesoviBaseRouter = FalcorRouter.createClass(
   
    Array.prototype.concat.apply([],[
        CatalogList,
        CatalogById
    ])
        
);

export default class extends WesoviBaseRouter{
    
    constructor(opts){
        
        super();
       // this._cache = new FalcorRouter.Model({ cache: {} });
    }
}

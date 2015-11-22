import falcor from 'falcor';
import Router from './server/routers/wesovi-base-router';

export default (key)=>{
    console.log(key);
    let model = new falcor.Model({
        source : new Router(key)
    });
    console.log(model);
    global.model = model;
    return model
}
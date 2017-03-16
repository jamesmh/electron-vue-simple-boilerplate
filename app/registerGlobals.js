import { remote } from 'electron';

export default _ => {
    const globals = remote.getGlobal("AppGlobals");
    
    return {
        resources: globals.resources
    };
}
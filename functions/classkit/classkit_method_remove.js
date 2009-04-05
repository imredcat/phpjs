function classkit_method_remove (classname, methodname) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // *     example 1: classkit_method_remove('someClass', 'someMethod');
    // *     returns 1: true
    
    if (typeof classname === 'string') {
        classname = window[classname];
    }
    delete classname.prototype[methodname]; // Delete any on prototype
    // delete classname[methodname]; // Delete any as static class method
    return true;
}
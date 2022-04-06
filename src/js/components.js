/**
 * Adds a MIME header to a base64 png image.
 * @param {string} b64 - png image base64 encoded.
 * @returns {string}
 */
 function addMIMEjpeg(b64){
    if(!b64.includes('data:')){
        return `data:image/jpeg;base64,${b64}`;
    }else{
        return b64;
    }
}


/** Custom Image class */
class CustomImage {
    /**
     * Creates a custom image object.
     * @param {string} imageId - html image element id.
     */
    constructor(imageId){
        this.image = document.getElementById(imageId);
    }

    /**
     * Clears the image content.
     */
    clear(){
        if(this.image){
            this.image.src = '';
        }
    }

    /**
     * Updates the html image source.
     * @param {string} src - image source.
     */
    setSource(src){
        if(this.image){
            this.image.src = src;
        }
    }
    
    /**
     * set a base64 image source.
     * @param {string} b64 - image source on base64 format.
     */
    setBase64Source(b64){
        if(!b64.includes('data:')){
           b64 = addMIMEjpeg(b64);
        }
        this.setSource(b64);
    }
}

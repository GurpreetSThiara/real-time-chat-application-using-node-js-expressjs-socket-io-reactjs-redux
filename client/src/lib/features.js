export const fileFormat = (url = "") => {
    // Extract the file extension from the URL
    const fileExtension = url.split('.').pop().split(/[#?]/)[0].toLowerCase();
    
    // Determine the file type based on the extension
    switch (fileExtension) {
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
        case 'bmp':
        case 'svg':
            return 'image';
        
        case 'mp4':
        case 'mkv':
        case 'avi':
        case 'mov':
        case 'wmv':
            return 'video';
        
        case 'mp3':
        case 'wav':
        case 'flac':
        case 'aac':
        case 'ogg':
            return 'audio';
        
        case 'pdf':
        case 'doc':
        case 'docx':
        case 'ppt':
        case 'pptx':
        case 'xls':
        case 'xlsx':
            return 'file';
        
        default:
            return 'file';
    }
};


export const transformImage = (url = "") => {
    return url
}
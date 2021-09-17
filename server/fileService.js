import * as id from 'uuid';
import * as path from 'path';

export class FileService {
    static saveFile(file) {
        try {
            const fileName = id.v4() + '.jpg';
            const filePath = path.resolve('static', fileName);
            file.mv(filePath);
            return fileName;
        } catch (error) {
            console.log(error);
        }
    }
}
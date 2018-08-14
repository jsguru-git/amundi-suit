export default {
    methods: {
        imagePath: (filename) => {
            return require('../../img/' + filename)
        }
    }
};
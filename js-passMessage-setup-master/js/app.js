const person = {
    name: 'Julia',
    reverseName: function() {
        const self = this;

        function getReverseName() {
            let reverse = '';
            for(let i = self.name.length -1; i >= 0; i--) {
                reverse += self.name[i];
            }

            return reverse;
        }

        return `${getReverseName()}`;
    }
};  

console.log(person.reverseName());
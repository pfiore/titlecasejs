describe('titleCase', function() {

    it("converts all words of a title from uppercase to title case", function() {
        expect(titleCase("CAT")).to.equal("Cat");
    });

    it("capitalizes the first letter of a word in a sentence", function() {
        expect(titleCase("cat")).to.equal("Cat");
    });

    it("capitalizes both words of a two word sentence", function() {
        expect(titleCase("cat fish")).to.equal("Cat Fish");
    });

    it("capitalizes all words of a three word title", function() {
        expect(titleCase("cat fish dawg")).to.equal("Cat Fish Dawg");
    });

    it("does not capitalize article words", function() {
        expect(titleCase("cat in the hat")).to.equal("Cat in the Hat");
    });

    it("does not capitalize article words, unless first word", function() {
        expect(titleCase("the cat in the hat")).to.equal("The Cat in the Hat");
    });
});

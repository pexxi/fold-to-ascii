import ASCIIFolder from '../src/ascii-folder';

describe('ascii folder', () => {
	describe('string with diacritics', () => {
		it('should replace unknown characters', () => {
			expect(
				ASCIIFolder.foldReplacing(
					'Lorem ipsum dôlor sit amêt, pri at cetèro ëripuît inérmis.',
					'x'
				)
			).toEqual(
				'Lorem ipsum dolor sit amet, pri at cetero eripuit inermis.'
			);
		});
		it('should omit unknown characters', () => {
			expect(
				ASCIIFolder.foldReplacing(
					'Lorem ipsum dôlor sit amêt, pri at cetèro ëripuît inérmis.'
				)
			).toEqual(
				'Lorem ipsum dolor sit amet, pri at cetero eripuit inermis.'
			);
		});
		it('should maintain unknown characters', () => {
			expect(
				ASCIIFolder.foldMaintaining(
					'Lorem ipsum dôlor sit amêt, pri at cetèro ëripuît inérmis.'
				)
			).toEqual(
				'Lorem ipsum dolor sit amet, pri at cetero eripuit inermis.'
			);
		});
	});
	describe('string with emojis', () => {
		it('should replace unknown characters', () => {
			// "🤧😇".length == 2 (https://blog.jonnew.com/posts/poo-dot-length-equals-two)
			expect(ASCIIFolder.foldReplacing('Lorem 🤧😇 Ipsum', 'x')).toEqual(
				'Lorem xxxx Ipsum'
			);
		});
		it('should omit unknown characters', () => {
			expect(ASCIIFolder.foldReplacing('Lorem 🤧😇 Ipsum', '')).toEqual(
				'Lorem  Ipsum'
			);
		});
		it('should maintain unknown characters', () => {
			expect(ASCIIFolder.foldMaintaining('Lorem 🤧😇 Ipsum')).toEqual(
				'Lorem 🤧😇 Ipsum'
			);
		});
	});
	describe('string with kanji characters', () => {
		it('should replace unknown characters', () => {
			expect(ASCIIFolder.foldReplacing('お早うございます', 'x')).toEqual(
				'xxxxxxxx'
			);
		});
		it('should omit unknown characters', () => {
			expect(ASCIIFolder.foldReplacing('お早うございます', '')).toEqual(
				''
			);
		});
		it('should maintain unknown characters', () => {
			expect(ASCIIFolder.foldMaintaining('お早うございます')).toEqual(
				'お早うございます'
			);
		});
	});
});

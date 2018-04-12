class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	};
	createDiv(text) { 
		let div = document.createElement('div');
		div.style.cssText =`width: ${this.width}px; 
							height: ${this.height}px; 
		                    background-color: ${this.bg}; 
		                    font-size: ${this.fontSize}px; 
		                    text-align: ${this.textAlign}`;
        div.innerHTML = text;
        document.body.appendChild(div);
	};	
};

const getSize = new Options(30, 300, 'purple', 25, 'center');

getSize.createDiv('Hello, World "JavaScript!"');


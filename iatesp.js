define(['pipAPI', 'https://domnabanakou.com/quiat10.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Otros', //Will appear in the data.
			title : {
				media : {word : 'Otros'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 2 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Ellos'},
				{word: 'Suyo'},
				{word: 'Sí mismo'},
				{word: 'El'},
				{word: 'Sus'},
				{word: 'Se'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Yo', //Will appear in the data.
			title : {
				media : {word : 'Yo'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 2 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Mí'},
				{word: 'Soy'},
				{word: 'Mío'},
				{word: 'Mí mismo/a'},
				{word: 'Me'},
				{word: 'Yo'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://domnabanakou.com/assets/img/'
		} 
	});
});
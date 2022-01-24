define(['pipAPI', 'https://domnabanakou.com/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Other', //Will appear in the data.
			title : {
				media : {word : 'Other'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'They'},
				{word: 'Theirs'},
				{word: 'Them'},
				{word: 'Their'},
				{word: 'Themselves'},
				{word: 'Those'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Self', //Will appear in the data.
			title : {
				media : {word : 'Self'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'yf1.jpg'}, 
				{word: 'I'},
				{word: 'Me'},
				{word: 'My'},
				{word: 'Mine'},
				{word: 'Myself'},
				{word: 'My'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://domnabanakou.com/assets/img/'
		} 
	});
});
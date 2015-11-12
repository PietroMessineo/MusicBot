

var telegram = require('telegram-bot-api');

var api = new telegram({
	token: '161160994:AAEVN4R9TbMBEk_eS1VXknW22y3d3u3_BME',
	updates: {
		enabled: true,
		get_interval: 400
	}
	});

String.prototype.contains = function(value){
			 return this.indexOf(value) ==0;
		}
		
		
api.on('message', function(message){
	
	// variabili 
	var chat_id = message.chat.id;
	var text = message.text;
	var user = message.chat.first_name;

	// It'd be good to check received message type here
	// And react accordingly
	// We consider that only text messages can be received here
	
	
	
	if (text){
		//---------------------------------//
	if ( text.contains("Ciao")||text.contains("ciao")){
	api.sendMessage({
		chat_id: message.chat.id,
		text: 'Ciao ' + user
		
	}, function(err, message)
	{
		console.log(err);
		console.log(message);
	});
	}
	
				//Comandi non accettati
		//---------------------------------//

	if (!text.contains("/lista")&&!text.contains("/Lista")&&!text.contains("Ciao")&&!text.contains("/Musica")&&!text.contains("/musica")
	&&!text.contains("/start")&&!text.contains("ciao")&&!text.contains("/Musica")&&!text.contains("/Pitbull")&&!text.contains("/pitbull")
	&&!text.contains("/giovannibartolo")&&!text.contains("/GiovanniBartolo")&&!text.contains("/giovanniBartolo")&&!text.contains("/Giovannibartolo")
	&&!text.contains("/AlvaroSoler")&&!text.contains("/alvarosoler")&&!text.contains("/alvaroSoler")&&!text.contains("/Alvarosoler")&&!text.contains("/Kesha")
	&&!text.contains("/kesha")&&!text.contains("/Artisti")&&!text.contains("/artisti")&&!text.contains("/kygo")&&!text.contains("/Kygo")
	&&!text.contains("/FelixJaehn")&&!text.contains("/felixjaehn")&&!text.contains("/felixJaehn")&&!text.contains("/Felixjaehn")
	
	
	){
	api.sendMessage({
		chat_id: message.chat.id,
		text: 'Comando non riconosciuto !'
		
	}, function(err, message)
	{
		console.log(err);
		console.log(message);
	});
	}

			//Comandi in slash
	//------------------------------//
	if ( text.contains("/start")){
	api.sendMessage({
		chat_id: message.chat.id,
		text: 'Benvenuto ' + user + '!'
		
	}, function(err, message)
	{
		console.log(err);
		console.log(message);
	});
	}
	
			//Comandi riconosciuti
	//------------------------------//
	//lista
	if ( text.contains("/Lista")||text.contains("/lista")){
	api.sendMessage({
		chat_id: message.chat.id,
		text: "- /lista\n-----------------------\n- /musica\n- /nomeautore\n- /artisti"
	}, function(err, message)
	{
		console.log(message);
		console.log(err);
	});
	}
				//Comandi riconosciuti
	//------------------------------//
	//lista
	if ( text.contains("/Artisti")||text.contains("/artisti")){
	api.sendMessage({
		chat_id: message.chat.id,
		text: "- /AlvaroSoler\n- /FelixJaehn\n- /GiovanniBartolo\n- /Kesha\n- /Kygo\n- /Pitbull"
	}, function(err, message)
	{
		console.log(message);
		console.log(err);
	});
	}
	
	

			/*//Top 10
	//-----------------------------------//
	var img = ["http://southimagesservice.mtvnimages.com/uri/mgid:arc:content:mtv.it:b8c80d12-290e-4525-9da9-7412b3f6be3e?stage=live&ep=mtv.it&width=140&height=79&crop=true"];
	
	if ( text.contains("/Chart")||text.contains("/chart")){
	api.sendPhoto({
		chat_id: message.chat.id,
		photo: "/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/Charts/mgid-arc-content-mtv.it-b8c80d12-290e-4525-9da9-7412b3f6be3e.jpeg",
		caption: 'Ti ho voluto veramente bene',
	}, function(err, message)
	{
		console.log(message);
		console.log(err);
	});
	}
	*/

	 //immagine plus
		if(text.contains("+")){
	api.sendPhoto({
		chat_id: message.chat.id,
		//caption viene usato per una breve descrizione sotto la foto
		caption: '+',
		photo: '/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/plus.jpg'
	}, function(err, data)
	{
		console.log(err);
		console.log(message);
	});
	}
	
	//immagine multiply
		if(text.contains("X")){
	api.sendPhoto({
		chat_id: message.chat.id,
		//caption viene usato per una breve descrizione sotto la foto
		caption: 'X',
		photo: '/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/multiply.jpg'
	}, function(err, data)
	{
		console.log(err);
		console.log(message);
	});
	}
	
	//Musica Random
		var s = [
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Alvaro\ Soler\ -\ Agosto.mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Charlie\ Puth\ Ft.\ Meghan\ Trainor\ -\ Marvin\ Gaye\ \(Boehm\ Remix\).mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Dj\ Ross\ Ft.\ Ramin\ Rezai\ -\ Flowin\ Like\ The\ River.mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Duke\ Dumont\ -\ Ocean\ Drive.mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Ed\ Sheeran\ -\ Photograph\ \(Felix\ Jaehn\ Remix\).mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Faydee\ -\ Lullaby.mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Felix\ Jaehn\ Ft.\ Polina\ -\ Book\ of\ Love.mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Jason\ Derulo\ -\ Cheyenne.mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Kygo\ -\ ID.mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Major\ Lazer\ -\ Powerful\ feat.\ Ellie\ Goulding\ \&\ Tarrus\ Riley\ \(Michael\ Calfan\ Remix\).mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Oliver\ Heldens\ \&\ Becky\ Hill\ -\ Gecko\ \(Overdrive\).mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Tresor\ Ft.\ Aka\ -\ Mount\ Everest\ \(Freddy\ Verano\ Remix\).mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/OMI\ -\ Cheerleader\ \(Felix\ Jaehn\ Remix\).mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Giovanni\ Bartolo/Giovanni\ Bartolo\ -\ Melody\ \(Original\ Mix\).mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Giovanni\ Bartolo/OMI\ -\ Cheerleader\ \(Giovanni\ Bartolo\ Remix\).mp3",
		"Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Giovanni\ Bartolo/Stefano\ Nava\ Ft.\ Canazzo\ -\ Jessica\ Ti\ Amo\ \(Giovanni\ Bartolo\ Remix\).mp3"
		];
		var r = Math.round(Math.random()*(s.length-1));
		console.log(r,s[r])
		if(text.contains("/Musica")||text.contains("/musica")){
	api.sendAudio({
		chat_id: message.chat.id,
		audio: s[r],
	}, function(err, data)
	{
		console.log(err);
		console.log(message);
	});
	}

	//Musica Artista 
		var s = [
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Giovanni\ Bartolo/Giovanni\ Bartolo\ -\ Melody\ \(Original\ Mix\).mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Giovanni\ Bartolo/OMI\ -\ Cheerleader\ \(Giovanni\ Bartolo\ Remix\).mp3",
		"Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Giovanni\ Bartolo/Stefano\ Nava\ Ft.\ Canazzo\ -\ Jessica\ Ti\ Amo\ \(Giovanni\ Bartolo\ Remix\).mp3"
		];
		var r = Math.round(Math.random()*(s.length-1));
		console.log(r,s[r])
		if(text.contains("/GiovanniBartolo")||text.contains("/giovanniBartolo")||text.contains("/Giovannibartolo")||text.contains("/giovannibartolo")){
	api.sendAudio({
		chat_id: message.chat.id,
		audio: s[r],
	}, function(err, data)
	{
		console.log(err);
		console.log(message);
	});
	}
	
		//Musica Artista 
		var s = [
		"/Users/pietro/Music/iTunes/iTunes\ Media/Music/Pitbull/Unknown\ Album/Timber\ ft.\ Ke\$ha.mp3"
		];
		var r = Math.round(Math.random()*(s.length-1));
		console.log(r,s[r])
		if(text.contains("/pitbull")||text.contains("/Pitbull")){
	api.sendAudio({
		chat_id: message.chat.id,
		audio: s[r],
	}, function(err, data)
	{
		console.log(err);
		console.log(message);
	});
	}
	
			//Musica Artista 
		var s = [
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Kygo\ -\ ID.mp3"
		];
		var r = Math.round(Math.random()*(s.length-1));
		console.log(r,s[r])
		if(text.contains("/Kygo")||text.contains("/kygo")){
	api.sendAudio({
		chat_id: message.chat.id,
		audio: s[r],
	}, function(err, data)
	{
		console.log(err);
		console.log(message);
	});
	}
	
			//Musica Artista 
		var s = [
		"/Users/pietro/Music/iTunes/iTunes\ Media/Music/Pitbull/Unknown\ Album/Timber\ ft.\ Ke\$ha.mp3"
		];
		var r = Math.round(Math.random()*(s.length-1));
		console.log(r,s[r])
		if(text.contains("/Ke$ha")||text.contains("/ke$ha")||text.contains("/kesha")){
	api.sendAudio({
		chat_id: message.chat.id,
		audio: s[r],
	}, function(err, data)
	{
		console.log(err);
		console.log(message);
	});
	}
	
				//Musica Artista 
		var s = [
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Ed\ Sheeran\ -\ Photograph\ \(Felix\ Jaehn\ Remix\).mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/OMI\ -\ Cheerleader\ \(Felix\ Jaehn\ Remix\).mp3",
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Felix\ Jaehn\ Ft.\ Polina\ -\ Book\ of\ Love.mp3"
		];
		var r = Math.round(Math.random()*(s.length-1));
		console.log(r,s[r])
		if(text.contains("/FelixJaehn")||text.contains("/felixjaehn")||text.contains("/felixJaehn")||text.contains("/Felixjaehn")){
	api.sendAudio({
		chat_id: message.chat.id,
		audio: s[r],
	}, function(err, data)
	{
		console.log(err);
		console.log(message);
	});
	}


		//Musica Artista 
		var s = [
		"/Users/pietro/Desktop/MusicBot/node_modules/telegram-bot-api/MUSICA/Canzoni/Alvaro\ Soler\ -\ Agosto.mp3"
		];
		var r = Math.round(Math.random()*(s.length-1));
		console.log(r,s[r])
		if(text.contains("/AlvaroSoler")||text.contains("/alvarosoler")||text.contains("/alvaroSoler")||text.contains("/Alvarosoler")){
	api.sendAudio({
		chat_id: message.chat.id,
		audio: s[r],
	}, function(err, data)
	{
		console.log(err);
		console.log(message);
	});
	}

		

			//Download EasterEgg
	//-----------------------------------//

	if ( text.contains("Download Bot")||text.contains("download bot")){
	api.sendDocument({
		chat_id: 165957339,
		document: '/Users/pietro/Desktop/MusicBot/main.js'
	}, function(err, message)
	{
		console.log(message);
		console.log(err);
	});
	}
	
	/*Posizione
		if(text.contains("Immagine")){
	api.getUserProfilePhotos({
		user_id: message.chat.id,
		offset: ''
	}, function(err, data)
	{
		console.log(err);
		console.log(message);
	});
	}
*/

	
	
	//*********** scrivere tutto prima di questo *****************************//
		// chiude il primo if
	}
		
});

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++)
 {
	if (names[i].charAt(0)==="J" || names[i].charAt(0)==="j") 
	{
		byeSpeaker.speak(names[i]);
	}
	else
	{
		helloSpeaker.speak(names[i]);
	}
	
}
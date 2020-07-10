> ## 08.07.2020  
> ### 09:10  
> I looked for a good weather map to use as an > overlay for my app, but I did not find any api that worked as I wanted it to.  
> Some of these APIs did not even work on their demo website.  
> Vane is an example of such an API:  
> ![Image of Vane not working](images/research/vane_weather-map.png)  
> 
> ---  
> ### 10:20  
> I looked through some of the other weather APIs and one thing that stuck out to me was how much personal information these companies want.  
> Trimble would be a great example for that.  
> This API wants your full name, the name of your company, your job title, your email and your phone number.  
> There is no way to test it without handing them half of your CV.  
> ![Image of trimble login screen](images/research/trimble_weather-map.png)  
> 
> ---  
> ### 13:45  
> I've finally found a contestant for a weather API.  
> This one is called Windy and it's pretty straight forward.  
> 1. Get an API key  
> 2. Add the library to your HTML body  
> 3. Add the method to your code  
> 4. Hope that it works the first time  
> 
> *It did not work the first time*  
> ![Image of a windy error](images/errors/windy_error.png)  
---  
---  
> ## 09.07.2020  
> ### 13:20  
> I finally managed to make the area filters work on the map.  
> For example can I color all golf courses whatever color I'd like.  
> But I can not only mark golf courses.  
> I found a list of all the things that can be marked.  
> ![Image of all golf courses marked](images/progress/all-golf-courses-marked.png)  
> 
> ---  
> ### 15:05  
> I wrote some code to make it easier to specify what you want to be marked.  
> Now such a layer can easily be marked by adding it to the layers array in map.service.ts.  
> As an example, say this is your configuration:  
> ```
> layers: { id: string, color: string }[] = [  
>   { id: "landuse.golf", color: "#5555FF" },  
>   { id: "water", color: "#FFAAAA" },  
>   { id: "landuse.forest", color: "#00AA00" }  
> ];
> ```  
> This would produce this result:  
> ![Image of all golf courses, bodies of water and forests marked, each in a different color](images/progress/multiple-layers-marked.png)  
> 
> ---  
> ### 17:05  
> I tested the marking functionality until now, so I can make sure it'll work in the end product.  
---  
---  
> ## 10.07.2020  
> ### 13:00
> I found a goldmine on opendata.swiss.  
> Everything that's related to parking in the Zurich has a dataset.  
> This is also the reason, why I did not write this earlier, since I was bombarded with data.  
> I hope I can figure out how to implement that into my app.  
>> ![Image of all parking lots for cars in Zurich](images/research/parkierung_auto.png)  
>> All parking lots for cars  
>
>> ![Image of all parkhouses in Zurich](images/research/parkierung_bedacht.png)
>> All parkhouses  
>
>> ![Image of all parking lots for the disabled](images/research/parkierung_behinderte.png)  
>> All parking lots for the disabled  
>
>> ![Image of the different parking zones in Zurich](images/research/parkierung_tarife.png)  
>> All parking zones  
>
>> ![Image of all parking spaces for two-wheelers in Zurich](images/research/parkierung_zweirad.png)  
>> All parking spaces for two-wheelers  
> 
> ---  
> ## 14:20
> I've found a dataset of all the zones in Switzerland, where you're not allowed to fly drones.  
> I thought this might also be of use to some people, since the fine you have to pay, if you accidentally fly into a no-fly zone are pretty hefty.  
> ![Image of all the no-fly zones in Switzerland](images/research/shape-file_restrictions-for-drones.png)
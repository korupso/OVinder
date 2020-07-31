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
> ### 14:20
> I've found a dataset of all the zones in Switzerland, where you're not allowed to fly drones.  
> I thought this might also be of use to some people, since the fine you have to pay, if you accidentally fly into a no-fly zone are pretty hefty.  
> ![Image of all the no-fly zones in Switzerland](images/research/shape-file_restrictions-for-drones.png)  
>
> ---  
> ### 17:30  
> I managed to implement some rather chunky methods, which make it very easy to import such datasets.  
> I've tested it on the dataset of all parking lots for the disabled.  
> ![Screenshot of all parking lots for the disabled displayed on my app](images/progress/markers/parkierung_behinderte.png)  
---  
---  
> ## 14.07.2020  
> ### 14:00  
> I wrote a few functions, to make the import easier and more dynamic, but it's loading all the markers at once, which blue screened my laptop. I did lose quite a lot of my progress, but I did not lose my patience.
> 
> ---  
> ### 17:15
> I finished rebuilding what I've lost today, but there is still a problem with a dataset.  
> The parking lot dataset has thousands of entries, and it's still being loaded at the same time.  
> But it's too late now to fix it today, so I guess this will be tomorrow's challenge.  
>> Here is a screenshot, of how the app looks so far:  
>> ![Image of all currently implemented markers visible right next to Zurich main station](images/progress/markers/all_parking-markers_except_cars.png)  
>  
>> Here are the icons that I designed today (except for the disabled icon):  
>> ![Bike parking spot icon](images/progress/markers/icons/parking_bike.png)  
>> ![Parking lot icon](images/progress/markers/icons/parking_car.png)  
>> ![Disabled parking lot icon](images/progress/markers/icons/parking_disabled.png)  
>> ![Parking garage icon](images/progress/markers/icons/parking_garage.png)  
---  
---  
> ## 17.07.2020 
> ### 12:45 
> Found a better way to read out geoJSON files, using the HERE Maps API.
> This method probably is able to read it much more efficiently than my own method.
>
> ---
> ### 17:10
> I managed to implement the native method of the API to read the data.
> I am not able to use the read out data yet, since it doesn't return the same type.
---
---
> ## 20.07.2020
> ### 11:45
> I'm clicking through the documentation for the geoJSON reader from the HERE API, to find a method, that may fit with what I need to make the markers on the map load faster.
> I have tried a few approaches, but nothing has worked so far.
>
> ---
> ### 17:30
> I found a method called:
> ```typescript
> .getParsedObjects(): H.map.Object[]
> ```
> This method returns all map objects parsed via the geoJSON reader.  
> Using this, I'm able to access the coordinates of all the parsed markers.  
---  
---  
> ## 21.07.2020  
> ### 12:30  
> I found a way to get the coordinates of the corners of the visible map.  
> This way I can filter out all the markers, that don't need to be visible/loaded.  
> Using this, the program does not have to render all 49'000+ parking lots.  
> Instead it only renders the ~200 lots, that are visible on screen, which makes the loading times around 60 times faster.  
>> Here is the map loaded with the visible parking lots  
>> ![Image of parking lots near the main station](images/progress/markers/view-bounds/parking_car.png)  
>>  
>> Here the map zoomed out, to show, that only the important ones are loaded  
>> ![The above image zoomed out](images/progress/markers/view-bounds/parking_car-zoomed_out.png)  
---  
---  
> ## 22.07.2020  
> ### 13:00  
> Updated the documentation to what the project is now.  
> Added much more to the stock analysis.  
> 
> ---  
> ### 18:00  
> Managed to make the rendering of the markers dynamic, so that it always loads the ones, that are currently visible.  
> I had to export some code into separate functions, in order to improve efficiency.  
> I also commented some of the functions, so it's easier to understand.  
>> Here is an animated GIF, showing the dynamic loading  
>> ![Animated GIF showing the dynamic loading](images/progress/markers/view-bounds/dynamic_rendering.gif)  
---  
---  
> ## 24.07.2020  
> ### 11:45  
> I tried to make an icon for the app, but I'm not quite sure if I like it.  
> I also made a gantt chart for the forseeable future.  
>> Here is the icon  
>> ![Icon for the app](images/progress/icon.png)  
>  
>> Here is a screenshot of the chart  
>> ![Screenshot of the gantt chart](images/planning/gantt-diagram_2020-07-24.png)  
>   
> ---  
> ### 17:00  
> I tried to implement info bubbles to the markers, which worked, but they were quite buggy.  
> I tried to make them work correctly until now.  
> I will try to make them work tomorrow.  
>> This is a picture of a working info bubble with a sample text  
>> ![Info bubble with sample text](images/progress/markers/info-bubbles.png)  
---  
---  
> ## 27.07.2020  
> ### 12:15  
> I made the rendering of the marker icons much faster, by moving some code to other functions.  
> I also found out, that the parking_bike dataset also contains parking spaces for motorbikes, which is why I created another icon for that.  
> I feel like I'm getting better at creating icons, which is why I decided to only use self-made icons in the app, since it completely avoids the struggle with usage rights.  
> The app icon itself also has to be revamped in my opinion.  
>> Here is the new icon  
>> ![Icon for motorbike parking](images/progress/markers/icons/parking_motor-bike.png)  
>   
> ---  
> ### 16:15  
> I created an icon for mixed parking between motorbike and bycicle.  
> There is now info in the info bubbles of the markers, but it's poorly formatted as of now.  
>> Here is the new icon  
>> ![Icon for mixed parking between motorbike and bycicle](images/progress/markers/icons/parking_two-wheelers.png)  
---  
---  
> ## 28.07.2020  
> ### 12:05  
> I did not really make a lot of progress today.  
> The code I had to write was quite fiddly and the whole program stopped functioning, because of tiny mistakes.  
>   
> ---  
> ### 16:45  
> I somewhat managed to do what I wanted to do today.  
> I would've loved, if more progress was possible, but for now it's only info bubbles.  
> Sadly, there isn't a lot I was able to screenshot today, since progress was limited.  
> Nevertheless the info bubbles are kind of done.  
>> Here is a screenshot of an info bubble  
>> ![Screenshot of the info bubble, that appears for the Globus Parkhaus](images/progress/markers/info-bubbles/info-bubble_v1.png)  
---  
---  
> ## 29.07.2020  
> ### 12:45  
> I did not really accomplish much yet.  
> This morning mostly consisted of reading the guide on routing for the HERE Maps API and trying to implement it.  
> I did all the configuration and I'll test it for the first time after lunch.  
>   
> ---  
> ### 17:15  
> I did not manage to do what I had planned today.  
> My laptop crashed multiple times, since the native update function updates much too often.  
> I may create a demo project just to try this functionality out, since it takes ages to compile and crashed aren't a very fast error as well.  
---  
---  
> ## 30.07.2020  
> ### 12:45  
> I managed to fix the gps problem I had yesterday, but I then saw a new problem emerge, which I'll have to tackle after lunch.  
>   
> ---  
> ### 17:30  
> I wanted to test out my app on an android emulator, since I can't really test out gps on my laptop.  
> When I start the emulator, it always gives me an error I fully understand (but it would take too long to explain here), but I can't fix.  
> There is basically two quote symbols missing on the path of the executable, but I was not able to find, where the configuration for that is located.  
> I spent the whole rest of the day, just trying to insert two little symbols, but it didn't work.  
> Has been a while, since a day was this frustrating.  
>> Here is an screenshot of the error  
>> ![Screenshot of the error, that pops up, whenever I start the emulator](images/errors/emulator_not_starting.png)  
---  
---  
> ## 31.07.2020  
> ### 11:45  
> I did not really make any progress today until now.  
> I mostly reinstalled the emulator and the AVD (android virtual device), which took quite a long time.  
>   
> ---  
> ### 17:05  
> I was able to start the emulator and install the app on it.  
> Sadly the app doesn't really seem to work at the moment.  
> The screen on the emulator is just white and I can't seem to figure out why.  
> I recieved multiple bluescreens on top of that as well, which made work today rather unpleasant.  
>> Here is a screenshot of the emulator working  
>> ![Screenshot of the emulator working](images/progress/emulator_working.png)  
>   
>> Here is a screenshot of the app running on the emulator  
>> ![White screen appearing after starting the app on the emulator](images/errors/blank_screen.png)
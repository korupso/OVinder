## 30.06.2020  
**What did I do today?**  
I fixed my GitHub error from yesterday.  
I found, installed and configurated a tool that was new to me.  
I started the SCRUM board.  
  
**What will I do tomorrow?**  
I will try to finish the SCRUM board and start the documentation.  
  
**What hinders my progress?**  
The GitHub error from yesterday put me back a few hours, but I managed to find a workaround.  
The temperature in my room is not very pleasant, so I'll try to work on the balcony from now on.
  
---  
## 01.07.2020  
**What did I do today?**  
I finished the SCRUM board and the stock analysis.  
I also started to read into the OpenHERE Maps API and got the API keys.  
  
**What will I do tomorrow?**  
I will finish my application mail and send it to Pete.  
I will try to work more on the documentation.  
I will try to implement the map component.
  
**What hinders my progress?**  
The OpenHERE Maps API was written for javascript and not for typescript.  
The documentation for the API is on an older version, which does make a huge difference.  
It's hard to concentrate with this weather going on.  
It's also rather hard to stay focused, whenever there is an error that doesn't want to go away for hours.  
  
---  
## 02.07.2020  
**What did I do today?**  
I have finished writing my application mail for Rafisa AG.  
> It went rather well and I did not have to spend too much time on it.  
  
I have read the documentation for OpenHERE Maps API and I fiddled around with it in an example project.  
> This did not go so well, because javascript did not recognize the MIME type the API was sending, since it's a padded JSON and not a normal one.  
> I also got a version mismatch error, since the tutorial I followed was obsolete.  
> I fixed the error after a bit of trial and error, until I got another error.  
  
**What will I do tomorrow?**  
I will work on the documentation the whole morning and I'll try to check off some tasks on the scrum board relating to the documentation.  
On the afternoon I'll try to find a fix or a workaround for the current error I'm having.  
  
**What hinders my progress?**  
I have got another error in my program.  
This time the error is an InvalidArgumentError caused by the HERE Platform Data Extension API in the service namespace.  
Apparently I have not given the correct arguments in the correct order or the correct count.  
I will continue to read the documentation on Fleet Telematics Advanced Data Sets that the API is using.  
  
---  
## 03.07.2020  
**What did I do today?**  
I have written 4 use cases and also the list of people who support me with this project.  
I also have read more of the documentation on HERE Maps and have figured out the parameters for a method, that's been making my head hurt.  
  
**What will I do after the weekend?**  
I'll create a table for the tools I've used and their licenses in the first hour of the day.  
Afterwards I'll add the remaining small parts of the documentation until lunch time.  
The rest of the day I'll spend on making the map work.  
  
**What hinders my progress?**  
I do not currently have an obvious error, but the map doesn't show anyways.  
I'll have another read in the documentation until I find some useful information on how to fix that problem.  
Maybe I'll create a StackOverflow question, if I don't find anything.  
  
---  
## 06.07.2020  
**What did I do today?**  
I have finished the documentation on what the project is so far.  
I will obviously add more to it, if it does need it.  
The morning really went as planned, while the afternoon was not as successful.  
  
**What will I do tomorrow?**  
I will dedicate tomorrow towards making sure the map works as inteded.  
I hope this will work.  
  
**What hinders my progress?**  
The error I'm having with the map doesn't really display properly.  
It's hard fixing an error you don't know the name, nor the cause of.  
I'll try to read more into the documentation to fix it.  
  
---  
## 07.07.2020  
**What did I do today?**  
I managed to make the map work, after reading more into the documentation.  
It took quite a while, since I did not get a nicely formulated error.  
The error must not be very common, because no search engine I know of got me an answer.  
I considered posting a question on StackOverflow, but I then finally wrote the code I needed.  
After I fixed the map, I read the UI part of the documentation. (At least the parts I needed)  
With that, I was able to add the UI controls to the map.  

**What will I do tomorrow?**
I will work on the documentation for a few hours.
The time it'll take really depends on what I think might be needed in there.  
I estimate that it will take around 4-5 hours.  
I'll test out some potential features, if I have enough time to spare.  
  
**What hinders my progress?**  
There is no problem right now, since I just finished adding the map to the program.  
It did take a while to fix the error today, since it did not specify the failed part of the code.  
  
---  
## 08.07.2020  
**What did I do today?**  
I spent a good amount of time, thinking about where my app should go.  
I also tried a few weather APIs and had an appointment with pete at move.  
It took longer than expected to find a suitable API and I suspect it would take even longer to make it work.  
  
**What will I do tomorrow?**  
I will try to find more suitable APIs.  
I'll also focus more on the goal of having a few APIs instead of making a specific one work.  
I'd much rather have 4 or 5 nice-to-have features in my app, than 2 that work, but only after having spent hours on them.  
  
**What hinders my progress?**
Nothing really.  
I'm trying my best to find an amazing API and to think of possible features, but that's very luck based.  
  
---  
## 09.07.2020
**What did I do today?**
I was able to find the elusive list of markable areas on a HERE map.  
This should not have taken this long, HERE needs to make that more accessible.  
I had to go through pages upon pages of documentation and had to resort to reading the code.  
But it worked out in the end, and now I have the ability to mark things.  
I also wrote some code to make it easier to do that, so I can implement it into the GUI later.  
  
**What will I do tomorrow?**
I will dedicate the morning towards finding new possible features for the app.  
I still am a bit undecided what to do with it, but I believe that it's going in the right direction.  
The afternoon will be spent trying to implement what I've (hopefully) found in the morning.  

**What hinders my progress?**
I had some problems with Markdown today, but I got it fixed.  
There was no concrete solution to it, I just tried a bunch of stuff until it eventually worked.  

---  
## 10.07.2020  
**What did I do today?**
I found some very usable datasets on opendata.swiss and I was able to use at least one of them.  
The code I wrote for that I dynamic though, which means, that the other ones should be a walk in the park to implement.  
  
**What will I do after the weekend?**
I will have a job interview at Rafisa GMBH on monday, and I also have an appointment with my somnologist, so I wont have a lot of time to work on my app.  
I'll still try to brainstorm some ideas on what to do with my app.  
  
**What hinders my progress?**
I do not yet have a road block, yet I kind of expect one from a certain dataset I have.  
The one I'm talking about is not stored in markers on the map, but in shapes.  
But I think that there's no other way to find out than to try.  
  
---  
## 13.07.2020  
**What did I do today?**  
I had a job interview, which went very well, but I was not able to work on the project, due to another appointment right after the interview.  
  
**What will I do tomorrow?**  
I will try to make it possible to import more datasheets.  
Maybe make the methods more dynamic.  
  
**What hinders my progress?**
-  
  
---  
## 14.07.2020  
**What did I do today?**  
I worked on importing the different datasets and I designed some icons for the markers.  
  
**What will I do tomorrow?**  
Rafisa AG invited me to come have a look around in their company, which means there is no time for the project tomorrow.  
I'll take my laptop with me, to show them, what I've done so far.  
  
**What hinders my progress?**  
Mostly time.  
I'm in a very linear part of the project.  
There isn't any bug or error halting the progress.  
The progress is just rather slow.  
  
---  
## 17.07.2020  
**What did I do today?**  
I found a method from the HERE API to read geoJSON data, which makes it (hopefully) more efficient to parse these files.  
I also managed to implement the method, but it's not really functional yet.  
  
**What will I do after the weekend?**  
I will try to make the read out data readable, so I can start to make it functional.  
  
**What hinders my progress?**  
There isn't really a problem, it's just not a very fast process to trial and error my way through the API.  
  
---  
## 20.07.2020  
**What did I do today?**  
I found a method, that reveils the read out data, in a form, that is easily understood.  
The method is also pretty fast, which is good.  
  
**What will I do tomorrow?**  
I'll try to use that method to make only the necessary markers render on the map.  
This may allow me to utilize the 49k+ parking lots.  
  
**What hinders my progress?**  
It took quite a while to find the correct function for this task, since the documenation has clearly not been checked for readablility.  
It feels like reading the inline comments on a program with hundreds of classes and namespaces.  
  
---  
## 21.07.2020  
**What did I do today?**  
I managed to do what I wanted to do.  
The markers load correctly, but not dynamically yet.  
  
**What will I do tomorrow?**  
I finally need to finish the formalities for the project.  
Since I now know, that the datasets, that I found, can be utilized, I was able to decide on what to do with my project.  
  
**What hinders my progress?**  
I did not have a lot of time today, since I had to go to an appointment with Pete.  
  
---  
## 22.07.2020  
**What did I do today?**  
I wrote a lot of documentation this morning, but I hope it's done well now.  
I made the rendering of the markers dynamic, which really helps to improve the overall performance of the app.  
  
**What will I do tomorrow?**  
I'll try to add info to the markers, since there is some provided by the dataset.  
This may as well take the whole day, but I'll work some more on the performance, if there is time left.  
  
**What hinders my progress?**  
It's going smoother than ever.  
A lot of progress today, since I did not encount any errors.  
  
---  
## 24.07.2020  
**What did I do today?**  
I created a temporary icon for the app.  
I also created a gantt chart on the future of the project.  
In addition to that, I started work on the info bubbles.  
  
**What will I do after the weekend?**  
I will try to implement the info bubbles properly, in order to avoid any inconvenient bugs.  
I may as well also decide on a color palette.  
  
**What hinders my progress?**  
I had to spend too much time on a single method today, which is why I got a bit confused in the end.  
Maybe the weekend will help me to make me less confused on Monday.  
  
---  
## 27.07.2020  
**What did I do today?**  
I made the rendering of the markers much more fluent.  
I also created two new icons.  
One for motorbike parking and one for mixed parking between motorbike and bycicle.  
I worked on adding info into the bubbles, but it's not very easy to format it.  
I'll see, if there is something in the documentation.  
  
**What will I do tomorrow?**  
I will work more on the info bubbles and I'll try to make them look a bit better.  
This may as well take the whole day, but if there is time left, I'll try to start implementing the routing feature.  
  
**What hinders my progress?**  
Nothing at the moment.  
Everything is working as intended.  
  
---  
## 28.07.2020  
**What did I do today?**  
I formatted the info bubbles and changed the text inside of them into human language.  
I did not think, that it would actually take me the whole day to do this, but it shows in today's commit, that the solution was not as straight forward as one might have expected.  
  
**What will I do tomorrow?**  
I will try to add the routing to the info bubbles.  
I may also test out, how the app looks on different screens dimensions.  
It will surely not take as long as what I've done today.  
  
**What hinders my progress?**  
The subhuman documentation of the HERE Maps Javascript API.  
I don't believe a single thought has gone into writing this documentation.  
Most functions and events only have a single sentence explaining what it does, while others sometimes don't even have an explanation.  
There are also quite a lot of features I feel like is missing from the API.  
  
---  
## 29.07.2020  
**What did I do today?**  
I tried to make the gps coordinates of the user updatable in a sensible way, but it sadly did not work.  
I googled my problem a few times, but I didn't find a suitable answer.  
  
**What will I do tomorrow?**  
I'm probably going to create a demo project and fiddle around with the coordinates function until it works like I want it to.  
This may as well take the whole day, since I didn't manage to find a good solution today.  
If there is any time left, I'll try to add the routing feature.  
  
**What hinders my progress?**  
My problems today mostly constisted of crashes, which is something I can not do a lot against.  
I hope this will stabilize from now on.  
  
---  
## 30.07.2020  
**What did I do today?**  
I spent all day, trying to make the emulator work without any success.  
  
**What will I do tomorrow?**  
I kind of have to continue trying to fix that problem, since I can't test my app without it.  
Maybe a clearer mind after a good night's sleep helps.  
  
**What hinders my progress?**  
I think I've said enough things about the error from today.  
  
---  
## 31.07.2020  
**What did I do today?**  
I managed to fix the emulator, but the app doesn't work just now.  
It took quite a long time until I managed to fix the emulator, which is also a reason why I haven't made much progress today.  
  
**What will I do after the weekend?**  
The next step to testing the app would be to make the app work on the AVD.  
I may try to create a small demo project to make sure it's the programm, that's not working and not the emulator.  
  
**What hinders my progress?**  
It takes a very long time to setup a testing environment on an app, since the AVD is around 10GB in size and has to be reinstalled sometimes.  
I also got a few bluescreens and other minor, but time-stealing bugs, that I had to fix.  
  
---  
## 03.08.2020  
**What did I do today?**  
I made a demo project today and managed to make it work on the emulator.  
Sadly the demo project broke, but I learned a lot on how to make apps work on the emulator.  
  
**What will I do tomorrow?**  
I will create a new demo project, with my app's functionality.  
Adding the functionality step by step, to make sure everything works individually and to find errors more easily.  
  
**What hinders my progress?**  
Nothing at the moment.  
As long as it continues working like it was today, it should be a walk in the park. (famous last words)  
  
---  
## 04.08.2020  
**What did I do today?**  
I created a new demo project and added the map.  
It almost works as well as the browser version, but it still has some flaws.  
  
**What will I do tomorrow?**  
I'll try to make the GPS work, in order to start with the routing.  
If I still have time somehow, I'll start adding the routing to the info bubbles.  
  
**What hinders my progress?**   
The GPS-functions from the API don't work for some reason, which is why I don't make any progress regarding routing.  
I hope this will fix itself somehow, but that wont happen.
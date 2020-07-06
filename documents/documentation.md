## Stock analysis  
**How did I get the idea?**    
I thought about making an app, which tells you the closest stops and connections from that stop, a while ago, but never had the time to work on it.  
Since I needed a project, I wanted to realize my past idea.  
  
**Is the app going to be of any use?**  
Sometimes you just need to know where the next bus stop is.  
And yes, that's already somewhat accomplishable with other apps that already exist, but no other app I know of has this specific feature.  
  
**What are similar apps and how do they compare?**  
The big one is Google Maps, but as I mentioned above, it is missing this feature.  
Google Maps may probably be faster at finding stations, but my app will not collect any unnecessary data (if any).  
  
  
## Target group  
The target group of this app is people, who are often in unfamiliar cities.  
Using this app, they could easily find the way to some kind of public transport.  
  
  
## Helpers for this project  
> **My Mother**  
> She helps me wake up in the morning and reminds me to take my meds, so I have no trouble working.  
  
> **My Girlfriend**  
> She also helps me wake up, especially when I sleep at her place.  
> She also helps me find the motivation to actually start working.  
  
> **Pete from Move**  
> Pete is the stakeholder of the project.  
> He allowed me to choose the project myself, which is why my motivation is much bigger to complete it.  
  
> **Me**
> I am the developer, scrum master and product owner of this project.  
> I also design the GUI and write the documentation.  
  
  
## Setup and Environment  
I work from home using my personal laptop, that I bought for school.  
Working on the balcony makes it easy for me have a relaxed environment, while not having a bed I could fall asleep on.  
As an IDE I use Visual Studio Code, using Git as a source control.  
  
  
## Scope and daily effort  
I work 8 hours a day from monday to friday for about a month.  
Breaks are 15 minutes before and after lunch, while lunch break is an hour.  
  
  
## Tools and Licensing  
| **Tool**               | **Usage**                                                             | **License**      |
|------------------------|-----------------------------------------------------------------------|------------------|
| HERE Maps API          | Gives a rendered map depending on Lat. and Lng.                       | Freemium         |
| OpenData Transport API | Gives a list of connections on any given train-, bus- or tramstation. | Creative Commons |
| Ionic Framework        | Packages an angular application into an iOS and Android app.          | MIT License      |  
  
  
## Use cases  
| **Use case**                          | Show all stations                                               |
|---------------------------------------|-----------------------------------------------------------------|
| **Pre-condition**                     | App is opened                                                   |
| **Description of use case in detail** | The map is interactive and shows all stations in your perimeter |
| **Post-condition**                    | All stations on the visible part of the map get shown with their corresponding icon |
| **Exceptions**                        | The map could not be loaded, due to connection issues           |  
  
| **Use case**                          | Display route to station                                                  |
|---------------------------------------|---------------------------------------------------------------------------|
| **Pre-condition**                     | Clicked on station                                                        |
| **Description of use case in detail** | Shows the route from the user's current location to their desired station |
| **Post-condition**                    | Displays the route towards the chosen station                             |
| **Exceptions**                        | The route could not be displayed, due to connection issues                |  
  
| **Use case**                          | Display connections                                                    |
|---------------------------------------|------------------------------------------------------------------------|
| **Pre-condition**                     | Clicked on a station                                                   |
| **Description of use case in detail** | Lists all connections in chronological order that stop at this station |
| **Post-condition**                    | The user now sees all connections on their screen                      |
| **Exceptions**                        | The connections could not be displayed, due to connection issues       |  
  
| **Use case**                          | Display a connection's next few stations                      |
|---------------------------------------|---------------------------------------------------------------|
| **Pre-condition**                     | Clicked on a connection while a station has been selected     |
| **Description of use case in detail** | The user can select a connection to see it's stations and it's arrival times |
| **Post-condition**                    | The user can now see all stations of the desired connection   |
| **Exceptions**                        | The stations could not be displayed, due to connection issues |  
  
  
## Glossary  
> **API**  
> Application programming interface  
  
> **API key**  
> A string of numbers and letters to identify a user using the API  
  
> **Component**  
> A part of an Angular application able to hold methods, variables and a graphical user interface  
  
> **Creative Commons**  
> An american non-profit organisation managing the copyright of products (incl. software)  
  
> **Exception**  
> An unexpected result  
  
> **Framework**  
> Someone else's code to make it easier to create software  
  
> **Freemium**  
> A free price plan, where you pay, if you overuse the plan  
  
> **IDE**  
> Interactive Development Environment  
  
> **JSON**  
> Javascript Object Notation  
  
> **MIME type**  
> Multipurpose Internet Mail Extensions (a kind of file typing system)  
  
> **Namespace**  
> A custom name for a bundle of files or code  
  
> **Post-condition**  
> What happens after a preceeding action  
  
> **Pre-condition**  
> What needs to happen, so an action can be performed  
  
> **SCRUM**  
> An agile framework used for software development to achieve the highest possible value of used time  
  
> **Use case**  
> A description of a potential scenario of an input into the system and the resulting response  
  
> **Workaround**  
> Not a fix for a problem, but a way to bypass it
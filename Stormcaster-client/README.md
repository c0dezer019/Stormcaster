# Stormcaster

## The problem
A lot of the best weather apps are bought up or merge with bigger companies. Often times this means that the features 
that users love go bye-bye, or become inaccessible due to increase in price of paid services beyond what a user is 
comfortable paying. And sometimes they become entirely inaccessible on certain platforms because of politics, policy, 
or a bad effort to get you to buy an Apple device. (cough, Dark Sky and Apple, cough).

The other problem is travel. Many if not most apps are more reactive than proactive when it comes to weather. As a
former driver, looking up weather along my route wasn't as easy as it could be and in many cases left too much to
chance.

***
<br />

## The solution
Introducing Project Stormfury, a hyper-local weather app that displays all the data you'll ever need and want on 
weather, in a clean and understandable format. And for a personal touch, each forecast comes with a message, usually 
sarcastic in nature, either from the database or through a couple API's, customizable in user settings.

Stormfury aims to provide navigational weather data in an easy-to-understand format, making it even easier for us to
provide a traveler with an alert they may be heading into adverse weather and also easier for our users to understand.
No more will a traveler have to 'look ahead' and calculate when they'll arrive and what the conditions will be like when
they get there. This is most beneficial to long distance haulers and travelers. Someone traveling 30 miles will less
likely benefit from this kind of service.

***
<br />

## Wireframes
##### Landing page
![Landing Page](https://live.staticflickr.com/65535/50614777397_25a7d75450_h.jpg)
<br />

##### Weather views
![Weather Views](https://live.staticflickr.com/65535/50614665807_2232d86cbe_h.jpg)
<br />
********
##### News
![News](https://live.staticflickr.com/65535/50613923858_41621b62ed_h.jpg)

***
<br />

## ERD
![ERD](https://live.staticflickr.com/65535/50614556471_bb3da68388_b.jpg)

***
<br />

## Known issues
- Not very responsive.
- Login form sends bad data.
- Sometimes returning to front page causes a render issue as coordinates are reset when leaving front page.
***
## Roadmap
1. Landing page completion.
    - The current weather view will be the default landing page.
    - Site will remember returning visitors and display current weather of last searched location, if logged out.
2. Login/out features
    - Change to include OAUTH.
3. Seven-day forecast for current location.
4. Transition effects.
5. Favorite Locations
    - Save several locations and view current weather for each in a summarized fashion.
    - Can expand for more details.
6. Climate/Environmental news from NYT.
7. Implement NASA API
8. Expand to the stars, get astronomical news from NYT and NASA.
9. weather animations depending on current weather.
10. 

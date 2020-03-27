# GeoJSON-Ballparks

Ballparks of Professional teams in [GeoJSON](http://geojson.org).

Back in early 2014, [Steve Pousty asked me](https://twitter.com/TheSteve0/status/436588544329388032) if I had Lat/Longs for Major/Minor League ballparks.  I [pushed up a Gist](https://gist.github.com/cageyjames/9142310) and then realized this was a project worth putting effort into and defined the original goal to get all professional baseball team ballparks in GeoJSON format.  I'm using Wikipedia to define "[Professional Baseball](https://en.wikipedia.org/wiki/Professional_baseball)" but it is only for a guide.  My initial goal was to get all the North and South American teams (majors to rookie) mapped and then top tier teams from around the world.  Below is a list of teams that have been mapped, ones that are currently being worked on and a to-do list.  If you know of any teams outside of the New World that hasn't been mapped or isn't in the list below, I encourage you to add it so we can get it in.  Right now we're only using points to map the stadiums.  

There are over 450 ballparks around the world included.  If you find a league I haven't added yet, please fork and add it in yourself.

## Baseball Leagues and Last Updated Dates

| League  | Update Date |
| ------------- | ------------- |
| [Major League Baseball](http://mlb.com) (American League and National League) | February 29, 2020 |
| [Arizona Cactus League](http://www.cactusleague.com) (Spring Training) | March 3, 2020 |
| [Florida Grapefruit League](http://www.floridagrapefruitleague.com) (Spring Training) | March 3, 2020 |
| [International League](http://www.milb.com/index.jsp?sid=l117) (Class Triple-A) | March 2, 2020 |
| [Mexican League](http://www.milb.com/index.jsp?sid=l125) (Class Triple-A) | March 2, 2020 |
| [Pacific Coast League](http://www.milb.com/index.jsp?sid=l112) (Class Triple-A) | March 1, 2020 |
| [Eastern League](http://www.milb.com/index.jsp?sid=l113) (Class Double-A) | March 7, 2020 |
| [Southern League](http://www.milb.com/index.jsp?sid=l111) (Class Double-A) | March 7, 2020 |
| [Texas League](http://www.milb.com/index.jsp?sid=l109) (Class Double-A) | March 7, 2020 |
| [California League](http://www.milb.com/index.jsp?sid=l110) (Class A-Advanced) | March 7, 2020 |
| [Carolina League](http://www.milb.com/index.jsp?sid=l122) (Class A-Advanced) | March 7, 2020 |
| [Florida State League](http://www.milb.com/index.jsp?sid=l123) (Class A-Advanced) | March 7, 2020 |
| [Midwest League](http://www.milb.com/index.jsp?sid=l118) (Class A) | March 8, 2020 |
| [South Atlantic League](http://www.milb.com/index.jsp?sid=l116) (Class A) | March 8, 2020 |
| [Northwest League](http://www.milb.com/index.jsp?sid=l126) (A Short) | March 22, 2020 |
| [New York-Penn League](http://www.milb.com/index.jsp?sid=l127) (A Short) | March 22, 2020 |
| [Appalachian League](http://www.milb.com/index.jsp?sid=l120) (Rookie Advanced) | March 22, 2020 |
| [Pioneer League](http://www.milb.com/index.jsp?sid=l128) (Rookie Advanced) | March 22, 2020 |
| [Arizona League](http://www.milb.com/index.jsp?sid=l121) (Rookie) | March 22, 2020 |
| [Arizona Fall League](https://en.wikipedia.org/wiki/Arizona_Fall_League) (Fall) | March 22, 2020 |
| [American Association of Independent Professional Baseball](http://www.americanassociationbaseball.com) (Independent) | March 22, 2020 |
| [Atlantic League of Professional Baseball](http://www.atlanticleague.com/) (Independent) | March 22, 2020 |
| [Empire Professional Baseball League](https://en.wikipedia.org/wiki/Empire_Professional_Baseball_League) (Independent) | March 24, 2020 |
| [Frontier League](http://www.frontierleague.com/) (Independent) | March 22, 2020 |
| [Pecos League](http://pecosleague.com/) (Independent) | March 20, 2020 |
| [Pacific Association of Professional Baseball Clubs](http://pacproclubs.pointstreaksites.com/view/pacproclubs/) (Independent) | March 22, 2020 |
| [United Shore Professional Baseball League](https://en.wikipedia.org/wiki/United_Shore_Professional_Baseball_League) (Independent) | March 26, 2020 |
| [The Western League](https://en.wikipedia.org/wiki/The_Western_League) (Independent) | March 23, 2020 |
| [Alaska Baseball League](http://alaskabaseballleague.org/) (Amateur Collegiate Summer Baseball League) | March 5, 2020 |
| [Cape Cod Baseball League](http://www.capecodbaseball.org/) (Amateur Collegiate Summer Baseball League) | March 12, 2020 |
| [Coastal Plain League](http://www.coastalplain.com) (Amateur Collegiate Summer Baseball League) | March 19, 2020 |
| [Pac-12 Conference Baseball](http://pac-12.com/sport/baseball) (College) | March 18, 2020 |
| [Nippon Professional Baseball](http://www.npb.or.jp) (Japan) | March 12, 2020 |
| [KBO League](http://www.koreabaseball.com/) (South Korea) | March 12, 2020 |
| [Chinese Professional Baseball League](http://www.cpbl.com.tw)) (Taiwan) | March 8, 2020 |
| [Australian Baseball League](http://web.theabl.com.au) (Australia) | March 8, 2020 |
| [China Baseball League](https://en.wikipedia.org/wiki/China_Baseball_League) (China) | March 18, 2020 |
| [Venezuelan Professional Baseball League](http://www.lvbp.com) (Venezuela) | March 19, 2020 |
| [Colombian Professional Baseball League](https://en.wikipedia.org/wiki/Colombian_Professional_Baseball_League) (Columbia) | March 19, 2020 |
| [Dominican Professional Baseball League](https://en.wikipedia.org/wiki/Dominican_Professional_Baseball_League) (Dominican Republic) | March 20, 2020 |
| [Liga de Béisbol Profesional Roberto Clemente](https://en.wikipedia.org/wiki/Liga_de_Béisbol_Profesional_Roberto_Clemente) (Puerto Rico) | March 20, 2020 |
| [Mexican Pacific League](https://en.wikipedia.org/wiki/Mexican_Pacific_League) (Mexico) | March 21, 2020 |
| [Baseball Philippines](https://en.wikipedia.org/wiki/Baseball_Philippines) - Partial, still tracking down teams (Philippines) | March 21, 2020 |
| [Nicaraguan Professional Baseball League](https://en.wikipedia.org/wiki/Nicaraguan_Professional_Baseball_League) (Nicaragua) | March 21, 2020 |
| [Cuban National Series](https://en.wikipedia.org/wiki/Cuban_National_Series) (Cuba) | March 22, 2020 |
| [Panamanian Professional Baseball League](https://en.wikipedia.org/wiki/Panamanian_Professional_Baseball_League) (Panama) | March 22, 2020 |
| [Italian Baseball League](https://en.wikipedia.org/wiki/Italian_Baseball_League) (Italy) | March 23, 2020 |
| [Honkbal Hoofdklasse](http://www.honkbalsite.com) (Netherlands) | March 18, 2020 |
| [Bundesliga](http://baseball-bundesliga.de/) (Germany) | March 26, 2020 |

## Defunct Leagues no Longer in Dataset

| League  | Status |
| ------------- | ------------- |
| [Canadian American Association of Professional Baseball](https://web.archive.org/web/20190813110459/http://canamleague.com/) (Independent) | [Merged with Frontier League](https://frontierleague.com/2019/10/16/frontier-league-can-am-league-to-join-forces/) in 2019 |
| [Mount Rainier Professional Baseball League](https://web.archive.org/web/20141016100449/http://www.mrpbl.com/)| League [ran out of money](http://www.dailyrecordnews.com/members/independent-baseball-league-falls-apart/article_eb63d686-11f6-11e5-a9bf-b72dc3b32878.html) |
| [North Country Baseball League](https://web.archive.org/web/20151209141056/http://www.northcountrybaseballleague.com/) | League folded when teams moved to Empire Professional Baseball League |
| [Thoroughbred League](https://web.archive.org/web/20171231192049/http://www.thoroughbredbaseball.com/) | League folded do to financial issues |
| [United League Baseball](https://web.archive.org/web/20140625051415/http://www.unitedleaguebaseball.pointstreaksites.com/view/unitedleague) | League [declaried bankruptcy](http://www.baseballessential.com/news/2015/01/15/united-league-baseball-folds-after-seven-seasons/) |

## To-Do

* [Prospect League](https://en.wikipedia.org/wiki/Prospect_League) (College)
* [Dominican Summer League](http://www.milb.com/index.jsp?sid=l130) (Rookie)
* [Gulf Coast League](http://www.milb.com/index.jsp?sid=l124) (Rookie)
* [Liga Paralela de Béisbol en Venezuela](https://en.wikipedia.org/wiki/Liga_Paralela_de_Béisbol_en_Venezuela) (Venezuela)
* [Veracruz Winter League](https://en.wikipedia.org/wiki/Veracruz_Winter_League) (Mexico)
* [California Collegiate League](https://en.wikipedia.org/wiki/California_Collegiate_League) (College)
* [Northwoods League](https://en.wikipedia.org/wiki/Northwoods_League) (College)
* [Argentine Baseball League](https://en.wikipedia.org/wiki/Argentine_Baseball_League) (Argentina)
* [Eastern League](http://tinyurl.com/hnjz4gk) (Japan)
* [Western League](http://tinyurl.com/zohqt3x) (Japan)
* [Miyazaki Phoenix League](https://en.wikipedia.org/wiki/Miyazaki_Phoenix_League) (Japan)
* [Baseball Challenge League](https://en.wikipedia.org/wiki/Baseball_Challenge_League) (Japan)
* [Shikoku Island League Plus](https://en.wikipedia.org/wiki/Shikoku_Island_League_Plus) (Japan)
* [Japan Women's Baseball League](https://en.wikipedia.org/wiki/Japan_Women%27s_Baseball_League) (Japan)
* [KBO Futures League](https://en.wikipedia.org/wiki/KBO_Futures_League) (South Korea)
* [Taiwan Baseball Summer League](https://en.wikipedia.org/wiki/Taiwan_Baseball_Summer_League) (Taiwan)
* [Italian Baseball League 2D](https://en.wikipedia.org/wiki/Italian_Baseball_League_2D) (Italy)
* [Honkbal Overgangsklasse](https://en.wikipedia.org/wiki/Honkbal_Overgangsklasse) (Netherlands)
* [Honkbal Rookie League](https://en.wikipedia.org/wiki/Honkbal_Rookie_League) (Netherlands)
* [Greater Brisbane League](https://en.wikipedia.org/wiki/Greater_Brisbane_League) (Australia)
* [New South Wales Major League](https://en.wikipedia.org/wiki/New_South_Wales_Major_League) (Australia)

### Suggestions

* [Summer Leagues](https://en.wikipedia.org/wiki/Collegiate_summer_baseball) (lots of work!)
* [NCAA Baseball](https://en.wikipedia.org/wiki/College_baseball) (298 Teams!)
* [NCAA Softball](https://en.wikipedia.org/wiki/List_of_NCAA_Division_I_softball_programs)

### Thoughts

I've put some thought into fixing this dataset some more. Right now teams drive the data, not stadiums.  This should be resolved asap.  Stay tuned for more.

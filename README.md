# The COVID Pandemic through the Lens of Vulnerable Youth in NYC #
## Was NYC prepared for this unprecedented social disaster? ##


This website has been developed by Ayaka Yamashita, Hyun-Chae Chad Loh and Naroa Coretti Sanchez as the final project for the MIT course 11.154/11.454 Big Data, Visualization, and Society.

For the scrollytelling we used the [Mapbox Scrolly Template.](https://github.com/mapbox/storytelling)

We were interested in exploring how the Covid-19 pandemic might have further increased social inequalities by impacting those who were already vulnerable disproportionally. We are especially concerned that youth, more vulnerable than adult during the pandemic.

This work explores three of the inequalities that we considered to have a significant impact in daily lives of the youth. We are aware that there are many relevant factors that we are not taking into consideration. In order to get a full picture to influence policy making, a more detailed study should be conducted with aditional resources and time.

## Data sources and methods: ##

### Social Vulnerability Index ###
    For this project we used the Social Vulnerability Index (SVI) from CDC, which uses 15 variables from the U.S. Census to help local officials identify communities that may need support before, during, or after disasters. It takes into account factors related to socioeconomic status, household composition and disability, minority status and language, and housing type and transportation. In our case, this index helps us to identify those who where already vulnerable that might have become even more so as a consequence of the Covid-19 pandemic. The 2018 CDC SVI takes data primarily from the 2014-2018 American Community Survey (ACS) 5-year estimates and is available at a census tract level.
### Demographics ###
    The demographic information has been extracted from the U.S. Census Bureau 2014-2018 ACS 5-year estimates Table DP05 in order to have data at a census tract level. The race data from the U.S. Census is divided in two main categories: people from one race and two or more races. Then, within people from one race, the main categories are: White, Black or African American, American Indian and Alaska Native, Asian, Native Hawaiian and Other Pacific Islander and Some other race. These categories are renamed as White, Black, Native, Asian, Islander, and Other for text legibility. 
### Access to Food ###
    The vulnerability related to food access is represened by the SNAP benefits(% households, US Census 2018), as it is an indicator of food insecurity. Not eating at school due to Covid-19 put more risk on the population that already had problems securing food even before Covid-19. The data has been extracted from the U.S. Census Bureau 2014-2018 ACS 5-year estimates Table S2201 and the resolution of the data was also the census tracts.
### Access to Playgrounds ###
    Covid-19 deprived access to school playgrounds from youth, and well-maintained parks became alternatives. Using park property data (2020), park maintenance budget data (2018) from the NYC Department of Parks and Recreation, as well as the already mentioned demographic data, we visualized how much city budget was allotted for each open space in NYC. Neighborhood parks are the parks that are a 10-minute walk from each census tract. We assume the neighbors are sharing the park, so we divide the park budget in 2018 by the number of park users. Then we finally calculate how much money is spent on each person by adding up the partial budget from all neighborhood parks. This metric estimates how much the budget is used for each person in NYC. In order only to include quality open space sufficient for supporting youth recreation, we removed vacant lots. This data is discrete data, so it allowed us to calculate the index of access to playgrounds also in a census tract level. 
### Access to the Internet ###
    The Covid-19 has changed the importance of having proper internet access. Right now, not having access to internet means not having access to education. To understand how much NYC was prepared for this shift, we included U.S. Census data on internet access that shows the number of under 18 youth who have access to both a computer and internet. The data has been extracted from the U.S. Census Bureau 2014-2018 ACS 5-year estimates Table B28005 and the resolution of the data was also the census tracts. 

## Contact: ##

Ayaka Yamashita (ayakayam@mit.edu), Hyun-Chae Chad Loh (hyunchae@mit.edu) and Naroa Coretti Sanchez(naroa@mit.edu)

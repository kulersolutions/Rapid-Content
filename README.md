RapidContent r0.1
=========================
##### Created by Gary Byrd, 06-26-13 10:34 #####

## Contents ##

* **demo.rwsw** - a sample RapidWeaver project
* **README.mdown**
* **release.mdown** - release notes
* **rapidContent.js**
* **RapidContent.rwtheme** - a default theme that has been re-named and set-up with the RwSetGet script and the RapidContent script

### What Is RapidContent? ###

RapidContent is a cousin to the popular ExtraContent script for RapidWeaver. While ExtraContent allows users to add some extra content to their web pages by adding a snippet of code to the sidebar, the RapidContent script allows users to add some extra content to their web page by creating a **single** html page that can then be used on any page of their website.

The 2 big differences in ExtraContent and RapidContent is are:

1. ExtraContent has to be manually added to each page where extra content is desired. RapidContent can be added to numerous pages at the same time.
2. The RapidContent script is dependent on the RwSetGet script from seyDesign while the ExtraContent script is a standalone script.


### How Can I Add RapidContent To My Theme? ###

In order to use the RapidContent script from Kuler Solutions you must have already setup the RwSetGet script from [seyDesign (seyDoggy)](https://github.com/seyDoggy/RwSetGet/).

### Step 1 ###

Create a folder in your themes 'Contens' folder and call it "scripts" or "js" to house the rapidContent.js file.

If you are creating a new folder then you will also need to add it to the 'Theme.plist' file so that RapidWeaver knows to include the folder when published.

    <string>js</string> or 
    <string>scripts</string>
You should already know how to do this ….

### Step 2 ###
Since you have already setup the RwSetGet script and initialized it in the head f the 'index.html' file like this:

    <script src="%pathto(rwget/rwget.js)%" charset="utf-8"></script>
    <script charset="utf-8">
    /* RwSet */
    RwSet = {
	    pathto: "%pathto(javascript.js)%",
	    baseurl: "%base_url%"
    };
</script>

You now need to add your call to the jQuery library and the rapidContent script like this:

    <script src="%pathto(js/jquery.js)%"></script>
    <script src="%pathto(scripts/rapidContent.js)%" charset="utf-8"></script>


### Step 3 ###

You are still in the 'index.html' file ….
You now need to add the areas that you want to be **RapidContent** areas. Very much the way you would do ExtraContent areas.

Like this:

    <div id="rapidContainer1"> </div>
    <div id="rapidContainer2"> </div>
    <div id="rapidContainer3"> </div>
etc …



### Step 4 Creating A RapidContent Page In RapidWeaver ###

Now go to RapidWeaver and add an **HTML** page to your project.

##### Follow this part carefully #####

In the Page Inspector "**General**" tab you will want to select "**Enabled**" and then deselect (uncheck) "**Show In Menu**"

Next, you will need to put "**rc**" in the field for "**Folder**".

Then you will need to name your page "**rc1.html**" (Note the image below).

This will direct the contents of this page into the

    <div id="rapidContainer1"> </div>
container in your **index.html**

![Page Inspector](http://kulersolutions.com/ls_images/rc_1.png).

Lastly, you will need to make sure that the theme **IS NOT** applied.

Go to the Page Inspector and click on the "**Page**" tab and then deselect (uncheck) "**Apply Theme**"

![Deselect "Apply Theme"](http://kulersolutions.com/ls_images/rc_2.png).

### Step 5 - Publish ###

Now it is time to publish. If you have done everything correctly then you will see the contents of your "**rc1.html**" page in the space where you created your

    <div id="rapidContainer1"> </div>
    

## DEMO ##

Install the sample theme by downloading and then double-clicking.

After installing the theme you will, of course, need to completely close out of RapidWeaver and restart for the installation to be complete.

Then you can download the sample project file and open it in RapidWeaver to take a closer look at how things are setup.

You can also drag and drop the theme file into Espresso or Coda to see how the master "index.html" file and plist are setup.



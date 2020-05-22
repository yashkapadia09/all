Fun project for retreats which need question, gratitude, and botheration baskets!

How it works:
1) Each teacher has their own spreadsheet. The spreadsheet should have two tabs, one called "Questions" and one called "Gratitude". Go to tools->script editor and paste the script from "script.gs"  
These instructions and script.gs is a copy/modification of scripts from
Medium's @dmccoy's post: https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175 (They did not come with a license, so assuming this is OK to use)
Once you do this, you'll need to go to publish->deploy as web app. You'll need to allow anonymous/anyone to access in the permissions and give all authorizations. The web app URL you get back can then be used to submit questions/gratitudes. 
2) Participants go to: http://coursebaskets.github.io/all/?teacher=NAME  The web app link that you received from step 1 above can be added to index.html (it looks something like "script.google.com/.../exec". Right now, index.html is very simple list of if/else statements - based on the name of the teacher, javascript selects the relevant web app link. 
3) When they submit questions/gratitudes there, a GET request is made to a web app that is hosted by google sheets. It will look something like this: https://script.google.com/.../exec?question=myquestion  


Background Image:  
https://pixabay.com/photos/pier-jetty-wood-water-trees-1209549/  
Free for commercial use  
No attribution required  

Basket image:
Shutterstock, royalty free image
(background removal via remove.bg)

Edits:
via pixlr 
https://www.img2go.com/compress-image

Browser testing:
browserling.com

Many, many SO, w3, and tutorial posts used in quickly building this. I took code from these Q&A/tutorials and modified/used it (did not copy code from any existing projects/pages, only tutorials, guides, Q&A, etc). Some I have specifically mentioned in the code itself, others that I still have in my history am including here to give credit to. The landing page code/CSS is also from tutorial, can't seem to find it. Included those I had in my history, likely missing some here. See the document "credits.txt" for a list of these sites... 


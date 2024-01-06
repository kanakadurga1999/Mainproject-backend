#user stories

Create ICTAK Exam registration portal for ICTAK students.


Requirements:

[]Home Page
[]Login Page 
[]Student Dashboard
[]Test Admin Dashboard
[]Logout 

Home Page
Proper home page with required design and graphics must be provided. A  Login button should be there for the student or Admin login

Login Page
Test Admin or Student must login with email and password.
Their credentials must be verified and they must be redirected to their respective Dashboards
Only those students who are eligible for the exit test must be able to login.
Students can login with Paatshala credentials.

Students View

       C.  Student Dashboard
After successful login, the students are redirected to their Dashboard.
An exit test confirmation must be displayed so that they may fill up the same.
The form must have the following fields:
Name
Phone number
Email
DOB
Batch Name(Dropdown) –
KKEM March CSA
KKEM March DSA
KKEM March MLAI
KKEM March FSD
KKEM March ST
Gender
Once they submit the form, a confirmation message has to appear and the form must be disabled for them.


Test Admin View

Test Admin Dashboard

After successful login, the test admin is redirected to the Test Admin Dashboard.
All the batches which are about to take up the exit test must be listed in the Dashboard.
Once each batch is clicked,  the registered student details of each batch must be listed in the dashboard.
Test must be able to upload results (as pdf or google sheet link) of each batch.
A provision to send email to the respective people must be given to the test admin.
A form for sending emails must be provided to the test admin with the receiver’s email id and the test result document link.
Once the admin clicks the send email button, an email with the result must be sent to the respective person.


Logout
Logout button must be provided to signout of the portal
 what documents should be created in mongodb database
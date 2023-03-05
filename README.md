This project is an app that lets you order pizza. You can create an account
using Firebase Auth or sign in with your Google account. The app has several
pages, including a home page that explains what the app is and its advantages, a
page with a list of pizzas, a dynamic page for each pizza with more information,
and an authentication and registration page. There are also pages for your
profile and your shopping cart, which are only available for logged-in users.
The app uses private and public routes, and it has automatic redirects.

You can sort the pizza by price and rating on the pizza selection page. On the
shopping cart page, you can see all the items you've added, change their
quantity, see the final price, and place an order. The app was built using
Material UI, which makes it responsive on different devices.

The app uses Redux Toolkit to keep track of your data and Redux Persist to save
it even after you refresh the page. The forms were created using Formik, and
validation is done using Yup.

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import Header from "../components/Header";
//import HomePage from "../components/IndecisionApp";
import Home from "../components/home/Home"
import ConsentPage from "../components/ConsentPage";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import AboutPage from "../components/about/About";
import AcademiaPage1 from "../components/academia/Academia1";
import AcademiaPage2 from "../components/academia/Academia2";
import AcademiaPage3 from "../components/academia/Academia3";
import AcademiaPage4 from "../components/academia/Academia4";
import AcademiaPage5 from "../components/academia/Academia5";
import AcademiaPage6 from "../components/academia/Academia6";
import AcademiaPage7 from "../components/academia/Academia7";
import AcademiaPage8 from "../components/academia/Academia8";
import TransferStudent1 from "../components/transfer-student/TransferStudent1";
import TransferStudent2 from "../components/transfer-student/TransferStudent2";
import WorkExperience1 from "../components/work-experience/WorkExperience1";
import WorkExperience2 from "../components/work-experience/WorkExperience2";
import WorkExperience3 from "../components/work-experience/WorkExperience3";
import WorkExperience4 from "../components/work-experience/WorkExperience4";
import FavSub from "../components/favourite-subjects/FavSub";
import Hobbies from "../components/hobbies/Hobbies";
import Values from "../components/values/Values";
import Test from "../components/test/Test";
import Big5 from "../components/big5/Big5";
import ThankYou from "../components/thank-you/ThankYou";


const AppRouter = () => (
    <BrowserRouter>
        <div>

            <Switch>

                <Route path='/' component={Home} exact={true}/> {/*//HomePage*/}
                <Route path='/home' component={Home}/>
                <Route path='/consentForm' component={ConsentPage}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/academia1/:id' component={AcademiaPage1}/>
                <Route path='/academia2/:id' component={AcademiaPage2}/>
                <Route path='/academia3/:id' component={AcademiaPage3}/>
                <Route path='/academia4/:id' component={AcademiaPage4}/>
                <Route path='/academia5/:id' component={AcademiaPage5}/>
                <Route path='/academia6/:id' component={AcademiaPage6}/>
                <Route path='/academia7/:id' component={AcademiaPage7}/>
                <Route path='/academia8/:id' component={AcademiaPage8}/>
                <Route path='/transfer1/:id' component={TransferStudent1}/>
                <Route path='/transfer2/:id' component={TransferStudent2}/>
                <Route path='/work1/:id' component={WorkExperience1}/>
                <Route path='/work2/:id' component={WorkExperience2}/>
                <Route path='/work3/:id' component={WorkExperience3}/>
                <Route path='/work4/:id' component={WorkExperience4}/>
                <Route path='/favSub/:id' component={FavSub}/>
                <Route path='/hobbies/:id' component={Hobbies}/>
                <Route path='/values/:id' component={Values}/>
                <Route path='/big5/:id' component={Big5}/>
                <Route path='/thankyou/:id' component={ThankYou}/>
                <Route path='/test' component={Test}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;


/*


 //<IndexRoute component={AboutPage} />
<Route path='/contact' component={ContactPage}/>
<Route path='/portfolio' component={PortfolioPage} exact={true}/>
<Route path='/portfolio/:id' component={PortfolioItemPage}/>
<Route component={NotFoundPage} />*/

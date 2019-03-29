<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    function index(){
        return view('login');
    }
    function fbLogin(){
<<<<<<< HEAD
        echo 'Ha entrado';
=======
        echo '<h1>Hola Mundo</h1>';
>>>>>>> c26735d67cba39a52e761ab12c5d0550e2fc8226
    }
}

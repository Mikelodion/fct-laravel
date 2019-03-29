<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    function index(){
        return view('login');
    }
    function fbLogin(){
        echo '<h1>Hola Mundo</h1>';
    }
}

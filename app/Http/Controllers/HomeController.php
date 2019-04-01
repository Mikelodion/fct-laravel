<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        return view('login');
    }
    public function fbLogin(Request $request){
      $user = (object) json_decode($request, true);
      $findUser = DB::TABLE("user")->where('email','=', $user->email);
      if ($findUser){
        echo "Usuario encontrado";
      }
      else{
        createUser($user);
      }
    }
    private function createUser($user){
      DB::TABLE('user') -> insertGetId($user);
      echo "Usuario Creado";
    }
}

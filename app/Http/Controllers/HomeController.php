<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index(){
        return view('login');
    }
    public function fbLogin(Request $request){
      $user = (object) json_decode($request, true);
      $findUser = DB::TABLE("user")->where('email','=', $user->email);
      if ($findUser){
        return json_encode(array('response'=>'Usuario Encontrado'));
      }
      else{
        return createUser($user);
      }
    }
    private function createUser($user){
      if(DB::TABLE('user') -> insertGetId($user)){
        return json_encode(array('response' =>'Usuario Creado'));
      }
    }
}

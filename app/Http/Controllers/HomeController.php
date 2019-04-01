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
      $user = $request;
      $findUser = DB::TABLE("user")->where('email','=', $user->email);
      if ($findUser->first()){
        return response()->json(['response'=>'Usuario Encontrado']);
      }
      else{
        return $this->createUser($user);
      }
    }
    private function createUser($user){
      if(empty(DB::TABLE('user') -> insertGetId(["email" => $user->email,
                                          "firstname" => $user->firstname,
                                          "lastname" => $user->lastname,
                                          "birth"=>$user->birth,
                                          "photo"=>$user->photo]))){
        return response()->json(['response' =>'Usuario Creado']);
      }
    }
}

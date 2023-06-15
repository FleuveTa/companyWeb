<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register (Request $request) {
        $input['email'] = $request->input('email');
        $rule = array('email' => 'unique:users,email');
        $validator = Validator::make($input, $rule);

        if ($validator->fails()) {
            return response([
                'message' => 'Email Already exist'
            ]);
        }
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        return response([
            "message" => "Successfully",
            "user" => $user
        ]);
    }

    public function login(Request $request) {
        if( !Auth::attempt([
             'email' => $request->input('email'),
             'password' => $request->input('password')
         ])) {
             return response(['message' => 'Wrong information'], 401);
         }
 
         $user = Auth::user();
 
         $token = $user->createToken('token')->plainTextToken;
 
         $cookie = cookie('token', $token, 60*24, null, null, true);
 
         return response()->json([
             'message' => 'success',
             'token' => $token,
             'user' => $user
         ])->withCookie($cookie);
     }


    
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactFormMail;
use App\Mail\MailNotify;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    
    public function submitContactForm(Request $request)
    {
        // Validate the form data
        // $validatedData = $request->validate([
        //     'name' => 'required',
        //     'phone' => 'required',
        //     'email' => 'required|email',
        //     'message' => 'required',
        // ]);
        $data = $request->all();

        // Send the email
        Mail::to('hoanggiangvnu@gmail.com')->send(new MailNotify($data));

        return response()->json(['message' => 'Email sent successfully']);
    }

}

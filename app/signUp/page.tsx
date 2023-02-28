const userProfileTable=await supabase
.from("user_profile")
.insert({user_id:responseId})
.select()
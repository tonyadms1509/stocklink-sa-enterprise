import { createClient } from "@supabase/supabase-js"

// ✅ Using your project URL and publishable key
const supabase = createClient(
  "https://adiwffecdtcjodxlmvjz.supabase.co",
  "sb_publishable_Vrse_swovJaKlIUStKgamg_ZPhxh6e6"
)

async function createUserWithProfile() {
  // Step 1: Create Auth user
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: "testuser@example.com",
    password: "password123"
  })

  if (signUpError) {
    console.error("❌ Auth signup error:", signUpError)
    return
  }

  const userId = signUpData.user.id
  console.log("✅ Created Auth user with UUID:", userId)

  // Step 2: Insert matching profile
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .insert([
      {
        id: userId,
        email: "testuser@example.com",
        subscription_active: false,
        created_at: new Date().toISOString()
      }
    ])

  if (profileError) {
    console.error("❌ Profile insert error:", profileError)
    return
  }

  console.log("✅ Inserted profile row:", profileData)
}

createUserWithProfile()

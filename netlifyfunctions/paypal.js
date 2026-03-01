// netlify/functions/paypal.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

export async function handler(event, context) {
  const body = JSON.parse(event.body)

  if (body.event_type === 'PAYMENT.CAPTURE.COMPLETED') {
    const userId = body.resource.custom_id
    await supabase.from('profiles')
      .update({ subscription_active: true })
      .eq('id', userId)
  }

  return { statusCode: 200, body: 'PayPal webhook received' }
}

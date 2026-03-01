import { IS_DEMO_MODE } from './config';
import demoData from './data/demoData.json';

export async function loadDashboardData() {
  try {
    if (IS_DEMO_MODE) {
      return demoData;
    } else {
      const { data, error } = await supabase.from('dashboard_view').select('*');
      if (error) throw error;
      return data;
    }
  } catch (err) {
    console.error("Live data failed, switching to screenshots:", err);
    return { fallback: true }; // signal UI to show screenshots
  }
}

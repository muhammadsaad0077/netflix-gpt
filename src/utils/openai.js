import OpenAI from 'openai';
import { openaikey } from './constant';


const openai = new OpenAI({
  apiKey: openaikey,
  dangerouslyAllowBrowser: true,
  
});

export default openai;



import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateEmbroideryIdea = async (userInput: string): Promise<AIResponse> => {
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    You are an expert embroidery artist and creative consultant for "Margarida Bordada".
    The user has a vague idea for a custom embroidery piece. Your goal is to turn this idea into a detailed, artistic description that they can send to the embroiderer.
    
    User Idea: "${userInput}"
    
    Please provide:
    1. A poetic and detailed visual description of the design (composition, mood).
    2. A suggested color palette (4-5 colors) with their specific Hex codes matching the mood.
    3. Suggested stitch types (e.g., French knot, satin stitch, back stitch) to achieve textures.
    
    Keep the tone elegant, creative, and inspiring. Respond in Portuguese (Brazil).
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestion: { type: Type.STRING, description: "Detailed visual description of the design in Portuguese." },
            colorPalette: { 
              type: Type.ARRAY, 
              items: { 
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING, description: "Name of the color in Portuguese (e.g. Verde Musgo)" },
                  hex: { type: Type.STRING, description: "Hex code of the color (e.g. #4A5D4F)" }
                },
                required: ["name", "hex"]
              },
              description: "List of colors with names and hex codes."
            },
            stitchTypes: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of embroidery stitch techniques."
            }
          },
          required: ["suggestion", "colorPalette", "stitchTypes"],
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("No response from AI");
    
    return JSON.parse(jsonText) as AIResponse;
  } catch (error) {
    console.error("Error generating embroidery idea:", error);
    throw error;
  }
};
import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew, Process, LLM
import litellm

# --- MONKEYPATCH FOR GROQ ---
# Groq's API strictly rejects the 'cache_breakpoint' key that CrewAI/LiteLLM injects.
original_completion = litellm.completion
def patched_completion(*args, **kwargs):
    if "messages" in kwargs:
        for msg in kwargs["messages"]:
            if "cache_breakpoint" in msg:
                del msg["cache_breakpoint"]
    return original_completion(*args, **kwargs)
litellm.completion = patched_completion
# ----------------------------

load_dotenv()
litellm.drop_params = True

def create_marketing_crew(topic: str) -> str:
    """
    Creates and runs a simple Marketing Crew using CrewAI and Groq.
    """
    # Ensure the API key is set
    groq_api_key = os.environ.get("GROQ_API_KEY")
    if not groq_api_key:
        return "Error: GROQ_API_KEY environment variable is not set."

    # Initialize the LLM using CrewAI's native wrapper (uses litellm under the hood)
    llm = LLM(
        model="groq/llama-3.3-70b-versatile",
        api_key=groq_api_key,
        temperature=0.7
    )

    # 1. Define the Agent
    marketing_agent = Agent(
        role="Senior Marketing Strategist",
        goal=f"Create a compelling, high-converting ad campaign strategy for: {topic}",
        backstory="You are a veteran marketing director who has scaled SaaS companies to millions in ARR using targeted, data-driven ad copy.",
        verbose=True,
        allow_delegation=False,
        llm=llm
    )

    # 2. Define the Task
    marketing_task = Task(
        description=f"Analyze the target audience for '{topic}'. Write 3 distinct A/B test variations for LinkedIn ad copy. Keep them concise, punchy, and focused on business value.",
        expected_output="A list of 3 LinkedIn ad copy variations formatted in markdown, along with a brief explanation of the target audience.",
        agent=marketing_agent
    )

    # 3. Form the Crew
    marketing_crew = Crew(
        agents=[marketing_agent],
        tasks=[marketing_task],
        process=Process.sequential
    )

    # 4. Execute the Crew
    result = marketing_crew.kickoff()
    
    return str(result)

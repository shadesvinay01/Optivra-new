import requests
import json
import time

url = "http://localhost:8000/api/run-marketing-crew"
data = {"topic": "AI Automation for Plumbers"}

print(f"Sending request to {url}...")
start_time = time.time()
response = requests.post(url, json=data)
end_time = time.time()

print(f"Response ({end_time - start_time:.2f}s):")
print(json.dumps(response.json(), indent=2))

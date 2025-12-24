import yaml
from dotenv import load_dotenv


def load_config(config_path="config/config.yaml"):
    """Loads configuration from a YAML file."""
    with open(config_path, "r") as file:
        config = yaml.safe_load(file)
    return config


def load_env():
    """Loads environment variables."""
    load_dotenv()

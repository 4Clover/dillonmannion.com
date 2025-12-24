"""
Genrefy main module.
"""

from .src.utils.config_loader import load_config, load_env
from .src.api.spotify_client import SpotifyClient


def main():
    """
    Main entry point for the Genrefy project.
    """
    # 1. Load Config & Env
    config = load_config()
    load_env()
    print(f"Starting {config['app']['name']} v{config['app']['version']}")

    # 2. Authenticate Spotify
    client = SpotifyClient()
    # client.authenticate() # Uncomment when credentials are set

    # 3. Main Logic Placeholder
    print("Ready to classify genres and create playlists.")


if __name__ == "__main__":
    main()

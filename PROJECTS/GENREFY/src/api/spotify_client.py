import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os


class SpotifyClient:
    def __init__(self):
        self.sp = None

    def authenticate(self):
        """Authenticates with Spotify using environment variables."""
        self.sp = spotipy.Spotify(
            auth_manager=SpotifyOAuth(
                client_id=os.getenv("CLIENT_ID"),
                client_secret=os.getenv("CLIENT_SECRET"),
                redirect_uri=os.getenv("REDIRECT_URI"),
                scope="user-library-read playlist-modify-public",
            )
        )
        print("Spotify authentication successful.")

    def get_user_playlists(self):
        """Fetches current user's playlists."""
        if not self.sp:
            raise Exception("Spotify client not authenticated.")
        return self.sp.current_user_playlists()

import librosa
import numpy as np


class AudioProcessor:
    def __init__(self, sample_rate=22050, duration=30):
        self.sample_rate = sample_rate
        self.duration = duration

    def load_audio(self, file_path):
        """Loads an audio file and returns the waveform."""
        y, sr = librosa.load(file_path, sr=self.sample_rate, duration=self.duration)
        return y, sr

    def extract_features(self, y, sr):
        """Extracts features like MFCCs from the waveform."""
        mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
        return np.mean(mfcc.T, axis=0)

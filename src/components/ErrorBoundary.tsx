import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in application:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#070b0e] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-16 h-16 mb-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl">
            🐸
          </div>
          <h2 className="text-2xl font-bold text-emerald-400 mb-2">Terjadi Kesalahan Saat Memuat Halaman</h2>
          <p className="text-gray-400 max-w-md mb-6 text-sm">
            {this.state.error?.message || 'Aplikasi mendeteksi error tak terduga. Silakan coba muat ulang halaman.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-colors cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            Muat Ulang Halaman
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

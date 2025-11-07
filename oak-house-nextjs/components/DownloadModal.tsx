'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setCookie } from '@/lib/cookies';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setCookie('hasGuide', 'yes', { secure: true });
        // Redirect to download or close modal
        onClose();
        // You can add download logic here
      }
    } catch (error) {
      console.error('Download modal error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal */}
        <div className="inline-block align-bottom bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-[#ffc807]">
          <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-[#ffc807] mb-4">
                  Get the Guides
                </h3>
                <p className="text-sm text-[#f9f9f9] mb-6">
                  We'll redirect you to a download page now, but we'll also email you links directly to them for reference later.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <input type="hidden" name="u" value="05d3ac8a604002ad12909fd35" />
                  <input type="hidden" name="id" value="13947fb38f" />

                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-medium text-[#f9f9f9]">
                      Name: <span className="text-[#ffc807]">*</span>
                    </label>
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      id="modal-name"
                      name="MERGE1"
                      placeholder="Ex: John"
                      className="mt-1 block w-full rounded-lg bg-[#454545] border border-[#666] px-4 py-2 text-black focus:bg-[#f9f9f9] focus:border-white focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-medium text-[#f9f9f9]">
                      Email: <span className="text-[#ffc807]">*</span>
                    </label>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      type="email"
                      id="modal-email"
                      name="MERGE0"
                      placeholder="example@email.com"
                      className="mt-1 block w-full rounded-lg bg-[#454545] border border-[#666] px-4 py-2 text-black focus:bg-[#f9f9f9] focus:border-white focus:outline-none"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    name="b_05d3ac8a604002ad12909fd35_13947fb38f"
                    tabIndex={-1}
                    value=""
                    className="absolute left-[-5000px]"
                    aria-hidden="true"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#ffc807] text-black uppercase font-montserrat py-2 px-4 rounded-lg hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] border border-black transition-all duration-300"
                  >
                    DOWNLOAD
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffc807] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

